/*Global Variables*/
var items=[
    {
        //first item
        code:'1tvs',
        title:'TV Samsumg',
        price:1000,
        description:"This is the long description of the item",
        category:'Electronics',
        image:'img/tv.jpg'

    },
    {
        //second item
        code:'1ph10',
        title:'Phone',
        price:1500,
        description:"This is the long description of the item",
        category:'Mobile Device',
        image:'img/iphone.jpg'
    },
    {
       //third item
       code:'2spk',
       title:'Speakers',
       price:2500,
       description:"This is the long description of the item",
       category:'Sound',
       image:'img/sound.jpg' 
    },
    {
       //fourth item
       code:'cmpt',
       title:'MacBook',
       price:5500,
       description:"This is the long description of the item",
       category:'Desktop',
       image:'img/computer.jpg' 
    },
    {
        //fifth item
        code:'ear',
        title:'AirPod',
        price:500,
        description:"This is the long description of the item",
        category:'Earphone',
        image:'img/earphone.jpg' 
     }
];


/*functions*/
function displayCatalog(){
    
    /*travel inside the array*/
    for(var i=0;i<items.length;i++){
    /*then get the element from inside the array*/
    var product = items[i];

    /*creat the string*/
    var layout =`<div class="item" id="${product.code}">
        <img src="${product.image}">
        <h4 class="item-title">${product.title}</h4>
        <h6 class="item-price">${product.price}</h6>
        <p> ${product.description}</p>
        <div class="button-div">
            <button class="btn btn-primary mb-2">Add to the Cart</button>
        </div>
    </div>`;
    console.log(i,layout);
    /*next display the element in the DOM aka HTML*/
        $("#catalog").append(layout);
    }
}

function init(){
    console.log('Catalog Page');
    displayCatalog();
}





$('#search-btn').on('click',function(){
    /*body search function*/
    var searchString=$('#search-txt').val();
    /*travel the array*/
    for(var i=0;i<items.length;i++){
        /*conditional*/
        if(searchString.toUpperCase()!=items[i].title.toUpperCase()){
             /*execute the change*/
            $('#'+items[i].code).hide();
        }
        else{
            /*execute teh change*/
            $('#'+items[i].code).show();
            
        }

        if(searchString==""){
            $('#'+items[i].code).show();
        }
    }
  

});


/*initialization*/
window.onload=init;