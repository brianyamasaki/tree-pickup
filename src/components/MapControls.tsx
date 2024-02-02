type Props = {
  fnUseLocation: (useLocation: boolean) => void;

};

const MapControls = ({fnUseLocation}: Props) => {
  return (
    <form>
      <label htmlFor="locationToggle">Use Location&nbsp;
        <input type="checkbox" name="locationToggle" id="locationToggle" onChange={e => {
          fnUseLocation(e.currentTarget.checked);
        }}/>
      </label>
    </form>
  )
}

export default MapControls;