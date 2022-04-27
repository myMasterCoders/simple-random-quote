
const btn=document.querySelector(".btn");
const show=document.querySelector("#list");
const autor=document.querySelector("#list2")
const poetry=[
    {
        text: 'گاهی مسیر عشق، ز پیکار عقل و دل   ...  از تیزی و خطر، چو شمشیر میشود ',
        name: 'قیصر امین پور'
    },
    {
        text:'کاش می شد آسمان غمگین نبود   ...رد پای کینه ها رنگین نبود ',
        name:'نیما یوشیج'
    },
    {
        text:'تو نیز دغدغه ات از دقایقت پیداست  ... مرا ببخش اگر چشم نکته بین دارم',
        name:'محمد علی بهمنی'
    },
    {
        text:'پاییز میوزد به درختان و من هنوز ... از فصل خنده های تو سیبی نچیده ام',
        name:'محبوبه بزم ارا'
    }
];
btn.addEventListener("click",(e)=>{
    const list=Math.floor(Math.random()*poetry.length);
     show.innerHTML=poetry[list].text;
    autor.innerHTML=poetry[list].name
})