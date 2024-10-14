import useInput from "../../hooks/useState";

export default function MyInput() {
  const { value, onChange } = useInput();
  return <input type="text" value={value} onChange={onChange} />;
}
