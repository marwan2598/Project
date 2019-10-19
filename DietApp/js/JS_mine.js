
// -----------------------------------------------------------------
//  هام: جميع المعادلات المستخدمة في هذه الصفحة غير صحيحة علميا ولا تنتمي لأرض الواقع
// ويجب تعديلها قبل نشر الموقع 
// -----------------------------------------------------------------

(function showUp(){
    if(window.innerWidth <= 767){
    document.getElementById("nav-button-div").classList.add('justify-content-center');
    document.getElementById("main-icon-div").classList.add('text-center');
    document.getElementById("footer-ul").classList.remove('d-flex', 'justify-content-around')}
    })()
let calcButtons=document.getElementsByClassName("calc-btn");
for(var i=0; i<calcButtons.length; i++){
    calcButtons[i].onclick= function(e){
        switch(e.target.innerHTML){
           case "حاسبة مؤشر كتلة الجسم": footerGoesDown(); listHide(); bmiAppear(); break;
           case "حاسبة الوزن المثالي": footerGoesDown(); listHide(); idealAppear();break;
           case "حاسبة دهون الجسم": footerGoesDown(); listHide(); fatAppear();break;
           case "حاسبة السعرات": footerGoesDown(); listHide(); caloriesAppear();break;
           case "حاسبة زيادة الوزن الناتجة عن الحمل": footerGoesDown(); listHide(); pregnancyAppear();break;
        }
    }
}
function footerGoesDown(){
    $( ".footer" ).animate({
        bottom: "-=50",
      }, 500, function() {
        // Animation complete.
      });
}
function footerGoesUp(){
    $( ".footer" ).animate({
        bottom: "+=50",
      }, 500, function() {
        // Animation complete.
      });
}
function listHide(){
    $( "#calc-choice" ).fadeOut( 500, function() {
        // Animation complete.
      });
}
function listAppear(){
    $( "#calc-choice" ).delay(400).fadeIn( 500, function() {
        // Animation complete.
      });
}

function bmiAppear(){
    $( "#BMI" ).delay(400).fadeIn( 500, function() {
        // Animation complete
      });
}
function bmiHide(){
    $( "#BMI" ).fadeOut( 500, function() {
        // Animation complete
      });
}
function idealAppear(){
    $( "#Ideal-Weight" ).delay(400).fadeIn( 500, function() {
        // Animation complete
      });
}
function idealHide(){
    $( "#Ideal-Weight" ).fadeOut( 500, function() {
        // Animation complete
      });
}
function fatAppear(){
    $( "#Body-Fat" ).delay(400).fadeIn( 500, function() {
        // Animation complete
      });
}
function fatHide(){
    $( "#Body-Fat" ).fadeOut( 500, function() {
        // Animation complete
      });
}
function caloriesAppear(){
    $( "#Calories" ).delay(400).fadeIn( 500, function() {
        // Animation complete
      });
}
function caloriesHide(){
    $( "#Calories" ).fadeOut( 500, function() {
        // Animation complete
      });
}
function pregnancyAppear(){
    $( "#pregnancy" ).delay(400).fadeIn( 500, function() {
        // Animation complete
      });
}
function pregnancyHide(){
    $( "#pregnancy" ).fadeOut( 500, function() {
        // Animation complete
      });
}

let backbtn= document.getElementsByClassName("back-btn");
for (let i=0; i<backbtn.length; i++){
backbtn[i].onclick=function(){
    pregnancyHide();
    caloriesHide();
    fatHide();
    idealHide();
    bmiHide();
    footerGoesUp();
    listAppear();
}
}
document.getElementById("calcbmi").onclick=function(){
    var age=document.getElementById("age-bmi").value;
    var height=document.getElementById("height-bmi").value;
    var weight=document.getElementById("weight-bmi").value;
    console.log(age);
    if(age=="" || height=="" || weight==""){
        alert("من فضلك أدخل جميع البيانات");
        return;
    }
    let gender=document.getElementsByName("gender-bmi");
    if(gender[0].checked){
        document.getElementById("result-bmi").innerHTML="النتيجة: " + age*12/height+weight;
    }
    else{
        document.getElementById("result-bmi").innerHTML="النتيجة:" + age*12/height+weight+2;
    }
    document.getElementById("result-bmi").style.opacity=0;
    $( "#result-fat" ).fadeTo( "slow" , 1, function() {
      });
}

document.getElementById("calc-ideal").onclick=function(){
    var age=document.getElementById("age-ideal").value;
    var height=document.getElementById("height-ideal").value;
    var weight=document.getElementById("weight-ideal").value;
    console.log(age);
    if(age=="" || height=="" || weight==""){
        alert("من فضلك أدخل جميع البيانات");
        return;
    }
    let gender=document.getElementsByName("gender-ideal");
    if(gender[0].checked){
        document.getElementById("result-ideal").innerHTML="النتيجة: " + age*12/height+weight;
    }
    else{
        document.getElementById("result-ideal").innerHTML="النتيجة:" + age*12/height+weight+2;
    }
    document.getElementById("result-ideal").style.opacity=0;
    $( "#result-fat" ).fadeTo( "slow" , 1, function() {
      });
}

document.getElementById("calc-fat").onclick=function(){
    var age=document.getElementById("age-fat").value;
    var height=document.getElementById("height-fat").value;
    var weight=document.getElementById("weight-fat").value;
    var neck= document.getElementById("neck-fat").value;
    var waist=document.getElementById("waist-fat").value;
    var hip= document.getElementById("hip-fat").value;
    console.log(age);
    if(age=="" || height=="" || weight=="" || neck=="" || waist=="" || hip==""){
        alert("من فضلك أدخل جميع البيانات");
        return;
    }
    let gender=document.getElementsByName("gender-fat");
    if(gender[0].checked){
        document.getElementById("result-fat").innerHTML="النتيجة: " + age*12/height+weight+neck+ waist+ hip;
    }
    else{
        document.getElementById("result-fat").innerHTML="النتيجة:" + age*12/height+weight+2+ neck+ waist+ hip;
    }
    document.getElementById("result-fat").style.opacity=0;
    $( "#result-fat" ).fadeTo( "slow" , 1, function() {
      });
    
}
document.getElementById("calc-calories").onclick=function(){
    var age=document.getElementById("age-calories").value;
    var height=document.getElementById("height-calories").value;
    var weight=document.getElementById("weight-calories").value;
    console.log(age);
    if(age=="" || height=="" || weight==""){
        alert("من فضلك أدخل جميع البيانات");
        return;
    }
    let activity=document.getElementById("activity-level").value;
    let result = 0;
    switch(activity){
        case "خامل": result=age*12+height+weight;break;
        case "نشاط بسيط": result=age*14+height+weight;break;
        case "نشاط متوسط": result=age*16+height+weight;break;
        case "رياضي": result=age*20+height+weight;break;
    }
    let gender=document.getElementsByName("gender-calories");
    if(gender[0].checked){
        document.getElementById("result-calories").innerHTML="النتيجة: " + result*2;
    }
    else{
        document.getElementById("result-calories").innerHTML="النتيجة:" + result;
    }

    document.getElementById("result-calories").style.opacity=0;
    $( "#result-calories" ).fadeTo( "slow" , 1, function() {
      });
    
}

let weeks="";
for(let i=1; i<=40; i++){
weeks+=`<option>أسبوع `+i+`</option>`;
}
document.getElementById("pregnancy-select").innerHTML=weeks;
document.getElementById("calc-pregnancy").onclick=function(){
    var week=parseInt(document.getElementById("pregnancy-select").value.slice(6));
    var height=document.getElementById("height-pregnancy").value;
    var weight=document.getElementById("weight-pregnancy").value;
    var weight2= document.getElementById("weight-pregnancy-2").value;
    if(week=="" || height=="" || weight=="" || weight2==""){
        alert("من فضلك أدخل جميع البيانات");
        return;
    }
    let twins=document.getElementsByName("twins");
    if(twins[0].checked){
        document.getElementById("result-pregnancy").innerHTML="النتيجة: " + week*12/height+weight+weight2;
    }
    else{
        document.getElementById("result-pregnancy").innerHTML="النتيجة:" + week*12/height+weight+2+ weight2;
    }
    document.getElementById("result-pregnancy").style.opacity=0;
    $( "#result-pregnancy" ).fadeTo( "slow" , 1, function() {
      });
    
}