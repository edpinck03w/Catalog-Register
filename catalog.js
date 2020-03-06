/*Global Variables*/
var items=[
    {
        //first item
        code:'1tvs',
        title:'TV samsumg',
        price:1000,
        description:"This is the long description of the item",
        category:'Electronics',
        image:'img/tv.jpg'

    },
    {
        //second item
        code:'1ph10',
        title:'Iphone 10',
        price:1500,
        description:"This is the long description of the item",
        category:'Mobile Device',
        image:'img/tv2.jpg'
    },
    {
       //third item
       code:'2spk',
       title:'SurroundSound',
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
        <h4>${product.title} </h4>
        <h6 class="item-price">${product.price} </h6>
        <p> ${product.description} </p>
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


function register(){
    console.log("Current Items"+items.length);
    //save from the input in a variable
    var code=$("#code").val();
    var title=$("#title").val();
    var price=$("#price").val();
    var description=$("#description").val();
    var category=$("#category").val();
    var image=$("#image").val();

    //assign the variable to the attribute
    items.push({
        code:code,
        title:title,
        price:price,
        description:description,
        category:category,
        image:image
    });

    console.log("New item" + items.length);
}

$("#register-btn").on('click',function(){
    register();
});


$('#search-btn').on('click',function(){
    /*body search function*/
    var searchString=$('#search-txt').val();
    /*travel the array*/
    for(var i=0;i<items.length;i++){
        if(searchString.toUpperCase()!=items[i].title.toUpperCase()){
            $('#'+items[i].code).hide();
        }
        else{
            /*execute teh change*/
            $('#'+items[i].code).show();
            
        }
    }

    /*conditional*/

    /*execute the change*/

});


/*initialization*/
window.onload=init;