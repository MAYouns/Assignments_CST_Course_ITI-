// all data
let headings = ['fontFamily', 'textAlign', 'lineHeight', 'letterSpacing', 'textIndent', 'textTransform', 'textDecoration'];
let styling = {
    fontFamily: ['arial', 'courier', 'georgia', 'impact', "'Times New Roman'", 'verdana'],
    textAlign: ['left', 'center', 'right', 'justify'],
    lineHeight: ['normal', '10px', '15px', 1.5],
    letterSpacing: ['normal', '-1px', '2px', '3px'],
    textIndent: ['0px', '5px', '15px', '25px'],
    textTransform: ['none', 'capitalize', 'uppercase', 'lowercase'],
    textDecoration: ['none', 'line-through', 'overline', 'underline']
};

// creating the structure of "html" file.
//1- creating <p> tag, and put it in the container ele.
let container = document.getElementById('container');
let p = document.createElement('p');
p.innerHTML = "Here is a paragraph of text that has various alignment characteristics that can be changed dynamically. Click the radio buttons below to view combinations of text style settings."
document.getElementsByTagName('body')[0].prepend(p);

// 2- creating div for every column and putting heading inside it.
for (let i = 0; i < 7; i++) {
    let createDiv = document.createElement('div');
    createDiv.id = headings[i];
    let headingTxt = document.createElement('h4');
    headingTxt.innerHTML = headings[i];
    createDiv.append(headingTxt);
    container.append(createDiv);
}

//creating 7 column of css_properties
for (let i = 0; i < 7; i++) {
    createStyleColumn(headings[i], i);
}

// styling by input:radio =================================//
let inputs = document.getElementsByTagName('input');      //
for (let i = 0; i < inputs.length; i++) {                //
    inputs[i].addEventListener('change', function () {  //
        p.style[this.name] = this.value;               //
    });                                               //
}                                                    //
//====================================================


function createStyleColumn(heading, number) {
    let i = 4; // every column has 4 properties
    if (heading == headings[0]) i = 6; // but the first column has 6 properties

    for (let j = 0; j < i; j++) {
        //create input radio
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = headings[number];
        input.id = headings[number] + '_' + j + 1;
        input.value = styling[heading][j];

        //create label
        let label = document.createElement('label');
        label.setAttribute('for', headings[number] + '_' + j + 1)
        label.innerHTML = styling[heading][j];

        //append the column
        let createDiv = document.createElement('div');
        createDiv.append(input);
        createDiv.append(label);
        document.getElementById(headings[number]).append(createDiv);
    }
}
