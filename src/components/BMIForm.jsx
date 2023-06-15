import calculateBmi from "../commons/calculatorBmi";

const BMIForm = (props) => {

  const {height, weight, setHeight, setWeight, setResult} = props
    return <form>
        <div>
          <label 
          htmlFor="height"
          >
            Height:
          </label>
          <input
          id="height" 
          type="text" 
          className="form-control" 
          placeholder="Cm" 
          value={height}
          onChange={(event) => {
          setHeight(event.target.value)
          }}
          />
        </div>

        <div>
          <label 
          htmlFor="weight"
          >
            Weight:
          </label>
          <input 
          id="weight" 
          type="text" 
          className="form-control" 
          placeholder="Kg" 
          value={weight}
          onChange={(event) => {
           
          setWeight(event.target.value)
          
          }}
          />
        </div>

        <button 
        className="btn btn-success w-100"

        onClick={() => {
          if (height < 100) {
  alert('Height more than 100 is required!');
  return;
}
    if (weight < 50) {
  alert('Weight more than 50 is required!');
  return;
}


          
          const result = calculateBmi(height, weight)
          console.log('result:', result);
          console.log('clicked');
          setResult(result)
        }}
        type="button"
        >
          Calculate
        </button>
      </form>

};


export default BMIForm;