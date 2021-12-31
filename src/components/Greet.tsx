type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>----- Greet -----</h2>
      <h2>
        Welcome
        {isLoggedIn
          ? ` ${name}! You have ${messageCount} new messages`
          : " Guest"}
      </h2>
    </div>
  );
};

export default Greet;
