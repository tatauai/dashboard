const e = React.createElement;

/*function LikeButton(){
return e(
  'button',
  { onClick: () => console.log("It WORKSSSSS") },
  'Like'
);}*/

function Rodape(){
  return e(
    'button',
    { onClick: () => console.log("It WORKSSSSS") },
    'Desenvolvido por Talita de Freitas Silva'

  );

}


/*const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);*/

const dom= document.querySelector('#rodape');
ReactDOM.render(e(Rodape), dom);