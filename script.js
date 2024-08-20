alert('test');
setTimeout(()=>document.getElementsByClassName('name')[0].innerHTML='change name',3000)
setTimeout(()=>document.getElementsByClassName('name')[1].innerHTML=' ',8000)
alert(4+5)
console.log('output')
for(i=0;i<10;i++)
    {
        console.log(i,document.getElementsByClassName('name')[0].innerHTML[i]);

    }
