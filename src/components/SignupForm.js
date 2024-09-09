import React, { useRef, useState } from 'react'


function SignupForm() {
    let [path,setPath]=useState("./image/noprofile.jpg");
    let firstNameInputRef = useRef();
    let lastNameInputRef= useRef();
    let femaleRBRef = useRef();
    let maleRBRef = useRef();
    let resultParaRef = useRef();
    let emailInputRef =useRef();
    let emailSpanRef = useRef();
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com\d*$/;
    let selectStateRef = useRef();
    let selectGender;
    let maritalStatus;
    let salutation;
    let selectLanguages={
        tel:false,
        eng:false,
        hin:false,
        kan:false,
    };

  return (
    <div>
        <h1>SignupForm</h1>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input type="number"></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef} onChange={()=>{
                    let result=emailRegEx.test(emailInputRef.current.value);
                    if(result==true){
                        emailSpanRef.current.innerHTML="Valid";
                        emailSpanRef.current.style.backgroundColor="lightgreen";
                    }
                    else{
                        emailSpanRef.current.innerHTML="Invalid";
                        emailSpanRef.current.style.backgroundColor="Red";
                    }
                }}></input>
                <span ref={emailSpanRef}></span>
            </div>
            <div>
                <label>State</label>
                <select ref={selectStateRef}>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    
                </select>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked==true){
                      selectGender="Female";
                    }
                }}></input>
                <label className='gender'>Female</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked==true){
                        selectGender="Male";
                    }
                }}></input>
                <label className='gender'>Male</label>
            </div>
            <div>
                <label>Marital Status</label>
                <input type="radio" name="ms"  onChange={(eO)=>{
                    if(eO.target.checked==true){
                        maritalStatus="Married";
                    }
                }}></input>
                <label className='gender'>Married</label>
                <input type="radio" name="ms"  onChange={(eO)=>{
                    if(eO.target.checked==true){
                        maritalStatus="Unmarried";
                    }
                }}></input>
                <label className='gender'>Unmarried</label>
            </div>
            <div>
                <label className='lan'>Languages Known</label>
                <input type="checkbox" onChange={(eO)=>{
                    selectLanguages.tel=eO.target.checked;
                }}></input>
                <label className='gender'>Telugu</label>
                <input type="checkbox" onChange={(eO)=>{
                    selectLanguages.eng=eO.target.checked;
                }}></input>
                <label className='gender'>English</label>
                <input type="checkbox" onChange={(eO)=>{
                    selectLanguages.hin=eO.target.checked;
                }}></input>
                <label className='gender'>Hindhi</label>
                <input type="checkbox" onChange={(eO)=>{
                    selectLanguages.kan=eO.target.checked;
                }}></input>
                <label className='gender'>Kannada</label>
            </div>
            <div>
                <label className='pro'>Profile</label>
                <input type="file" onChange={(eO)=>{
                    
                    console.log(eO.target.files);
                    let selectedImagePath = URL.createObjectURL(eO.target.files[0]);
                    setPath(selectedImagePath);
                }}></input>
                <img className='profile' src={path}></img>
            </div>
            <div>
                <button type="button" onClick={()=>{
                      let firstName = firstNameInputRef.current.value;
                      let lastName = lastNameInputRef.current.value;
                      let State =selectStateRef.current.value;
                      if(selectGender=="Male"){
                        salutation="Mr";
                      }else if(maritalStatus=="Married")
                        {
                          salutation="Mrs";
                        }
                         else{
                          salutation="Miss";
                         }
                      
                resultParaRef.current.innerHTML=`${salutation} ${firstName} ${lastName} from ${State} Knowned Languages ${selectLanguages.tel==true?"Telugu":""} ${selectLanguages.eng==true?"English":""} ${selectLanguages.hin==true?"Hindhi":""} ${selectLanguages.kan==true?"Kannada":""}`;
                }}>Submit</button>
            </div>
            <div>
                <p ref={resultParaRef}></p>
            </div>
        </form>
      
    </div>
  )
}

export default SignupForm

