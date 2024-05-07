import { useEffect, useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
// import useDataFun from "./useData";
// import uploadData from "./Upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = styled.input`
  font-weight: 600;
  font-size: 20px;
  /* border: px solid; */
  border-radius: 25px;
  padding: 6px 10px;
  margin-right: 1px;
  color: var(--color-input-00);
  background-color: rgb(224 242 254);

  /* background-color: #e6eaf2; */
`;
// const Article = styled.article`
//   display: flex;
//   justify-content: center;
//   /* border: 2px solid; */
//   padding: 14px 0px;
//   margin: 50px 0px;
//   /* border-radius: 20px; */
// `;
const Form = styled.form`
  display: flex;
  justify-content: center;
  border: 2px solid #a9bede;
  align-items: center;
  border-radius: 1.5%;
  padding: 50px 100px;
  background-image: linear-gradient(to bottom right, #f57d9d, #f78954);
  background-color: #fff;
`;

const Main = styled.main`
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  /* background-color: rgba(1, 1, 1, 1); */
`;
const FormRow = styled.div`
  display: grid;
  align-items: center;
  /* justify-content: center; */
  grid-template-columns: 12rem 24rem;
  gap: 0.1rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 20px;
  color: black;
  align-self: center;
  justify-self: flex-start;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 0.02em;
`;

const Button = styled.button`
  border: 1px solid;

  /* align-self: center; */
  font-size: 18px;
  font-weight: 600;
  /* margin-top: 20px; */
  padding: 5px 30px;
  flex-grow: auto;
  border-radius: 15px;
  color: #fff;
  background-color: #308049;
  letter-spacing: 0.05em;
`;

function App() {
  // useEffect(function () {}, []);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState("it");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(0);
  const objSet = {
    setAge,
    setGender,
    setDepartment,
    setLastName,
    setFirstName,
    setSalary,
  };
  let data = {};

  function handleSubmit(e) {
    e.preventDefault();
    data.firstName = FirstName;
    data.lastName = LastName;

    data.department = department;
    data.gender = gender;
    data.age = age;
    // console.log(data);

    if (data.firstName.length <= 1) {
      toast.error("Insert Valid First name", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      if (
        data.firstName !== "" &&
        data.lastName !== "" &&
        data.age != 0 &&
        data.salary != 0
      ) {
        // uploadData(data, objSet);
      } else {
        toast.error("Please Fill All The Required Fields 👨‍💻", {
          position: "top-center",
          theme: "colored",
        });
        return;
      }
    }
  }

  return (
    <div className="w-full">
      <p className="text-5xl text-white-500 text-stone font-bold font-sans">
        Form Page
      </p>
      <Main>
        <Form className="flex flex-col border-black-solid gap-1">
          <FormRow>
            <Label>First Name </Label>
            <Input
              type="text"
              id="firstName"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-sky-100"
              required
            />
          </FormRow>
          <FormRow>
            <Label>Last Name </Label>
            <Input
              type="text"
              id="lastname"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormRow>
          {/* <FormRow>
            <Label>Mobile: </Label>
            <Input
              type="number"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </FormRow> */}
          {/* <FormRow>
            <Label>Alternate Mobile: </Label>
            <Input
              type="number"
              id="alternateMobile"
              value={alternateMobile}
              onChange={(e) => setAlternateMobile(e.target.value)}
            />
          </FormRow> */}
          {/* <FormRow>
            <Label>Email: </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormRow> */}

          <FormRow>
            <Label>Age </Label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Department </Label>
            <select
              className="rounded-xl px-3 py-2.5 bg-sky-100 font-semibold"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="human resource">Human Resource</option>
              <option value="it">IT</option>
              <option value="marketing">Marketing</option>
            </select>
          </FormRow>
          {/* <FormRow>
            <Label>District: </Label>
            <Input
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </FormRow> */}
          {/* <FormRow>
            <Label>City: </Label>
            <Input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </FormRow> */}
          <FormRow>
            <Label>Salary </Label>
            <Input
              type="number"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Gender</Label>
            <select
              className="rounded-xl px-3 py-2.5 bg-sky-100 font-semibold"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
          </FormRow>

          <FormRow>
            <Button onClick={(e) => handleSubmit(e)} type="submit">
              Submit
            </Button>
          </FormRow>
        </Form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ToastContainer />
      </Main>
    </div>
  );
}

export default App;
