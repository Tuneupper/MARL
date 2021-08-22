/*Gleichzeitig mit dem Färben des Hintergrunds ändert sich der Text des Buttons in
"Bild einfügen".

Wird auf diesen Button mit dem Text "Bild einfügen" geklickt, 
wird unter dem Button das Bild gezeigt (liegt im Unterordner pics).

Vergrößern Sie den Abstand des Bildes zum Button auf 20 Pixel.

Gleichzeitig ändert sich der Text des Buttons in "Button verschwindet". 
Bei Klick auf diesen Button verschwindet der Button selbst. */

let h1 = document.querySelector("h1");
let bt = document.querySelector("button");
let img = '<br><img src="pics/katze_spiegelei.jpg">';
h1.innerHTML = "Klick auf den Button";     
h1.style.color = "#8E6";

bt.addEventListener("click", () => 
{
    if(bt.innerHTML == 'Färbe den Hintergrund') 
    {
        document.querySelector("body").style.backgroundColor = "#167";
        bt.innerText = 'Bild einfügen';
    }
    else if(bt.innerHTML == 'Bild einfügen') 
    {
        bt.innerText = 'Button verschwindet';
        bt.insertAdjacentHTML('afterend', img);
        bt.style.marginBottom = "20px";
    }
    else if(bt.innerHTML == 'Button verschwindet') 
    {
        bt.style.display = 'none';
    }
});