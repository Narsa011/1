function CoustomRender(reactElement,container) {

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.SetAttribute('href', reactElement.props.href)
    // domElement.SetAttribute('target', reactElement.props.target)
    
    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
   for (const prop in reactElement.props) {
    if (prop ==='Children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
   }
        
    


    type: 'a',
    props= {
          href: 'https://google.com',
          target :'_blank'

    },
    Childrenb='Click me to visit google'


const mainContainer = document.querySelector('#root')

CoustomRender (reactElement,mainContainer)