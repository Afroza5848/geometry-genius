function calculateTriangleArea(){
    // triangle base getinput
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleText = triangleBaseInput.value;
    const base = parseFloat(triangleText);
    console.log(base);

     // triangle base getinput
    const triangleHeightInput = document.getElementById('triangle-height') ;
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculation area
    const area = 0.5 * base * height;
    console.log('The area calculation is:',area);

    // area calculate result show
    const areaCalculateInput = document.getElementById('areaCalculateResult');
    areaCalculateInput.innerText = area;
}


function