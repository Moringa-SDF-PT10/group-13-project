function BudgetSetter({ budget, setBudget }) {
  return (
    <div>
      <h2>Set Your Budget</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        placeholder="Enter your budget"
      />
    </div>
  );
}

export default BudgetSetter;
