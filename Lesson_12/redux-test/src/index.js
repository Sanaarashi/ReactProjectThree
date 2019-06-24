import {createStore} from 'redux';

window.addEventListener('DOMContentLoaded', () => {
    'use stric';

    let rootDiv = document.getElementById('root');
    let wrapper = document.createElement('div'),
        counter = document.createElement('span'),
        incValueBtn = document.createElement('button'),
        decValueBtn = document.createElement('button'),
        clearValueBtn = document.createElement('button'),
        downloadBtn = document.createElement('button'),
        uploadBtn = document.createElement('button'),
        uploadIcon = document.createElement('i'),
        incIcon = document.createElement('i'),
        decIcon = document.createElement('i'),
        clearIcon = document.createElement('i'),
        downloadIcon = document.createElement('i');

    wrapper.setAttribute('id', 'wrapper');
    counter.setAttribute('id', 'counter');
    counter.textContent = 0;

    incValueBtn.setAttribute('id', 'inc');
    decValueBtn.setAttribute('id', 'dec');
    clearValueBtn.setAttribute('id', 'clear');
    downloadBtn.setAttribute('id', 'download');
    uploadBtn.setAttribute('id', 'upload');

    uploadIcon.setAttribute('class', 'fa fa-cloud-upload');
    incIcon.setAttribute('class', 'fa fa-plus');
    decIcon.setAttribute('class', 'fa fa-minus');
    clearIcon.setAttribute('class', 'fa fa-refresh');
    downloadIcon.setAttribute('class', 'fa fa-cloud-download');

    
    rootDiv.appendChild(wrapper);
    rootDiv.appendChild(incValueBtn);
    rootDiv.appendChild(decValueBtn);
    rootDiv.appendChild(clearValueBtn);
    rootDiv.appendChild(downloadBtn);
    rootDiv.appendChild(uploadBtn);
    wrapper.appendChild(counter);
    incValueBtn.appendChild(incIcon);
    decValueBtn.appendChild(decIcon);
    clearValueBtn.appendChild(clearIcon);
    downloadBtn.appendChild(downloadIcon);
    uploadBtn.appendChild(uploadIcon);


    const reducer = (state = 0, action) => {
        switch(action.type) {
            case 'INC':
                return state + 1;
            case 'DEC':
                return state - 1;
            case 'CLR':
                return (state = 0);
            case 'DWN':
                return (state = action.value);
            default:
                return state;
        }
    };

    const store = createStore(reducer);

    let idBase = [1, 2, 3];
    let newId = 3;

    const inc = () => ({type: 'INC'});
    const dec = () => ({type: 'DEC'});
    const clr = () => ({type: 'CLR'});
    const dwn = (value) => ({type: 'DWN', value});

    const dwnldAll = async () => {
        const rndNumber = Math.floor(Math.random() * idBase.length + 1);
        const data = await fetch(`http://localhost:3001/numbers/${rndNumber}`);

        if (!data.ok) {
            throw new Error('Whops');
        }

        return data.json();
    };

    const uplAll = async () => {
        await fetch('http://localhost:3001/numbers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({const: store.getState(), id: ++newId})
        });
        await idBase.push(newId);
      };

    const update = () => {
        counter.innerText = store.getState();
    };

    rootDiv.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName === 'BUTTON') {
            switch (target.id) {
                case 'inc':
                    store.dispatch(inc());
                    break;
                case 'dec':
                    store.dispatch(dec());
                    break;
                case 'clear':
                    store.dispatch(clr());
                    break;
                case 'download':
                    dwnldAll().then(some => store.dispatch(dwn(+some.const)));
                    break;
                case 'upload':
                    uplAll();
                    break;    
                default:
                    return;
            }
        }
    });

    store.subscribe(update);
});
