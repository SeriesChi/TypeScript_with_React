import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { LogedIn } from "./components/state/LogedIn";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { UserComponent } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumbers } from "./components/restriction/RandomNumbers";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import CustomComponent from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

function App() {
  const person = {
    first: "Series",
    last: "Chikanbanjar",
  };

  const personList = [
    {
      id: 1,
      first: "Bruce",
      last: "Jackson",
    },
    {
      id: 2,
      first: "Maddy",
      last: "Son",
    },
    {
      id: 3,
      first: "clark",
      last: "Kent",
    },
  ];

  return (
    <div className="App">
      {/* First task -> Typing and Basic prop */}
      {/* <Greet name="series" messageCount={10} isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={personList} /> */}

      {/* Second Task -> Advance Props */}
      {/* <Status status="error" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
        <Greet name="Series" isLoggedIn={true} />
      </Oscar> */}

      {/* Third Task -> event props */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Click", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* Fourth Task -> Style Props */}
      {/* <Container style={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* Fifth Task -> useState Hook */}
      {/* <LogedIn /> */}

      {/* Sixth Task -> useState Future Value and useState type assertion */}
      {/* <User /> */}

      {/* Seventh Task -> useReducer Hook and useReducer action type */}
      {/* <Counter /> */}

      {/* Eighth Task -> useContext Hook */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* Ninth Task -> useContext Future Value */}
      {/* <UserContextProvider>
        <UserComponent />
      </UserContextProvider> */}

      {/* Tenth Task -> useRef Hook */}
      {/* <DomRef />
      <MutableRef /> */}

      {/* Eleventh Task -> component prop */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* Twelveth Task -> Generic Props */}
      {/* <List
        items={["Eric", "Bruce", "Clark"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={personList} onClick={(item) => console.log(item)} /> */}

      {/* Thirteenth Task -> Restricting Props */}
      {/* <RandomNumbers value={10} isPositive /> */}

      {/* Fourteen Task -> Template Literals */}
      {/* <Toast position="center" /> */}

      {/* Fifteen Task -> Wrapping Element */}
      {/* <CustomButton variant="primary">Primary Button</CustomButton>
      <CustomInput type="text" className="form-control" /> */}

      {/* Sixteen Task -> Extracting a Component Props Types */}
      {/* <CustomComponent name="Series" isLoggedIn /> */}

      {/* Seventeen Task -> Polymorphic Component */}
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="label" size="sm" color="primary">
        label
      </Text>
    </div>
  );
}

export default App;
