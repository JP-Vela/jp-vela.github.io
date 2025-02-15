//credit Traversy Media
//PDF.js - Mozilla on GitHub
var url = 'https://jp-vela.github.io/pdfs/quiz73-94.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
      canvas = document.querySelector('#pdf-render'),
ctx = canvas.getContext('2d');

//render the page
const renderPage = num => {
  pageIsRendering = true;
  
  //get page
  pdfDoc.getPage(num).then(page => {
   //set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const renderCtx = {
      canvasContext : ctx,
      viewport
    }
      
    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;
      
      if(pageNumIsPending !== null){
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });   
    
    //output current page
    document.querySelector('.page-num').textContent = num;
  });
};

//check for page rendering
const queueRenderPage = num => {
  if(pageIsRendering) {
    pageIsPending = num;
  } else {
    renderPage(num);
  }
}

//show prev page

const showPrevPage = () => {
  if(pageNum <= 1) {
    return;
  }
  
  pageNum--;
  queueRenderPage(pageNum);
}

//show Next page
const showNextPage = () => {
  if(pageNum >= pdfDoc.numPages) {
    return;
  }
  
  pageNum++;
  queueRenderPage(pageNum);
}

//get document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
  pdfDoc = pdfDoc_;
  
  document.querySelector('#page-count').textContent = pdfDoc.numPages;
  
  renderPage(pageNum);
  
});

function changePDF(path){
    //get document
    pdfjsLib.getDocument(path).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        
        document.querySelector('#page-count').textContent = pdfDoc.numPages;
        
        renderPage(pageNum);
        
    });

}

//button events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);

document.querySelector('#next-page').addEventListener('click', showNextPage);



