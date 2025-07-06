function Result({ resultado: result }) {
  return result ? <div className="resultado">{result}</div> : null;
}

export default Result;
