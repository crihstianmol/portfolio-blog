/**
 * Find all img elements with data-pdf attribute,
 * then load pdf file given in the attribute,
 * then use pdf.js to draw the first page on a canvas, 
 * then convert it to base64,
 * then set it as the img src.
 */
var createPDFThumbnails = function () {

    var worker = null;
    var loaded = false;
    var renderQueue = [];

    // select all img elements with data-pdf attribute
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll('img[data-pdf]'));

    if (!nodesArray.length) {
        // No PDF found, don't load PDF.js
        return;
    }

    if (!loaded && typeof (pdfjsLib) === 'undefined') {
        var src = document.querySelector('script[data-pdfjs-src]').getAttribute('data-pdfjs-src');

        if (!src) {
            throw Error('PDF.js URL not set in "data-pdfjs-src" attribute: cannot load PDF.js');
        }

        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script).onload = callRender;
        loaded = true;
    } else {
        callRender()
    }
    function callRender() {
        pdfjsLib.GlobalWorkerOptions.workerSrc = "./static/js/pdf.worker.js";
        localStorage.setItem('waitImages', 'none')
        let e = new Event('storage')
        e.originalEvent = {
            key: 'waitImages',
            oldValue: '',
            newValue: ''
        }
        window.dispatchEvent(e)
        renderThumbnails().then(() => {
            localStorage.setItem('waitImages', 'block')
            window.dispatchEvent(e)
        })
    }

    async function renderThumbnails() {
        if (!pdfjsLib) {
            throw Error("pdf.js failed to load. Check data-pdfjs-src attribute.");
        }
        let percent, pos, posLength;
        pos = 1;
        percent = 0;
        posLength = nodesArray.length;
        localStorage.setItem('waitPercentage', 0)
        let e = new Event('storage')
        e.originalEvent = {
            key: 'waitPercentage',
            oldValue: '',
            newValue: ''
        }
        window.dispatchEvent(e)
        for (const element of nodesArray) {
            if (null === worker) {
                worker = new pdfjsLib.PDFWorker();
            }
            let pdf = await pdfjsLib.getDocument({ url: element.getAttribute('data-pdf'), worker: worker }).promise
            let page = await pdf.getPage(1)
            var canvas = document.createElement("canvas");
            var viewport = page.getViewport({ scale: 1.0 });
            var context = canvas.getContext('2d');

            viewport = page.getViewport({ scale: 340 / viewport.width });

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: context, viewport: viewport }).promise
            element.src = canvas.toDataURL();
            percent = (pos / posLength) * 100
            pos += 1;
            localStorage.setItem('waitPercentage', parseInt(percent))
            window.dispatchEvent(e)
        };

    }
};
