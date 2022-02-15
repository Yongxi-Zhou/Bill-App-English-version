import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  background: #eee;
  color: #969696;
`;

const MonthTotal = (props) => {
  const { year, month, day, getMonthTotal, in_out } = props;
  return (
    <Wrapper>
      <div>
        {year}.{month}.{day}
      </div>
      <div>
        {in_out === 1 ? "Income: " : "Expenditure: "} ${getMonthTotal(day)}
      </div>
    </Wrapper>
  );
};

export { MonthTotal };
