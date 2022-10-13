export default function Component() {
  return <>
    <mux-player style={{ color: 'red' }}>this should be red</mux-player>
    <div style={{ color: 'red' }}>this should be red, too</div>
    <mux-player><p>This should have a child</p></mux-player>
    <div><p>And this should have a child, too</p></div>
</>
}