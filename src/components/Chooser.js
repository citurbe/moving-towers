import React from 'react';
const Chooser = (props) => {
    var discs = 0;


  function handleClick(event){
    event.preventDefault();
    props.setStart(discs);
  }

  function handleChange(event){
    if (event.target.value < 55){
      discs = event.target.value;
    }
    else {
      discs = 0;
      alert('54 is the max!');
    }
  }

  return (
    <form>
      <label id='starting'> How many discs?</label>
      <input id='starting' type='text' onChange={handleChange.bind(this)} />
      <input type='submit' value='Generate' onClick={handleClick.bind(this)} />
    </form>
  );

};

export default Chooser;
