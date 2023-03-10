import './App.css';
import {Configuration, OpenAIApi} from 'openai'
import OptionSelector from './components/OptionSelector';
import { arrayItems } from './AI';
import Translation from './components/Translation';
import { useState } from 'react';

function App() {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APUI_KEY,
  });

  console.log(process.env.REACT_APP_OPENAI_API_KEY) 
  console.log(process.env) 

  const openai = new OpenAIApi(configuration)

  const [option, setOption] = useState({})
  const [input, setInput] = useState("")
  console.log(arrayItems)
  const selectOption = (option) => {
    setOption(option)
  }

  const search = async () => {
    // setOption({...option, prompt: input})
    let object = {...option, prompt: input};
    // console.log(object)

    const response = await openai.createCompletion(object);
    console.log(response.data.choices[0].text)
  };

  
  // console.log(option)
  return (
<>
    <div className="App">
      {process.env.REACT_APP_ABC_API} 1
    
    {Object.values(option).length === 0 ? <OptionSelector arrayItems={arrayItems} selectOption={selectOption}/> : 
    ( <Translation search={search} setInput={setInput}/>)}
    

    </div>

</>
  );
}

export default App;
