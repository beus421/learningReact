// 3. lets create custom render
function customRender(reactElement, container){
    
    /*
    // well create a new dom element using mimicking our reactElement
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // attaching this dom element with our container and thats it
    container.appendChild(domElement)*/

    // version 1.1 better one
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const key in reactElement) {
        // console.log('outer loop')
        if (key === 'props'){
        for (const key in reactElement['props']) {
            domElement.setAttribute(key, reactElement.props[`${key}`])
            // console.log(`inner loop and ${key}: ${reactElement.props[key]}`)
        }}else{
            continue
        }
    }

    container.appendChild(domElement)
}

// 1. this is how react sees an element
// the html or jsx you write is converted into something like this
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const root = document.querySelector('#root')

// 2. now we want to inject it in our html file
// for that well need a method

customRender(reactElement, root)