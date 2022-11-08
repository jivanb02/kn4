function webload()
{
    let imgs = document.documentElement.getElementsByTagName("img");
    
    for(let i = 0 ; i < imgs.length; i++)
    {
        imgs[i].src = "https://jivanbaghsarian.com/yepic.png";
    }
}

window.onload = webload;