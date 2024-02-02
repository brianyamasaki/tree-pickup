type Props = {
  fnUseLocation: (useLocation: boolean) => void;
  fnShowRegions: (showRegions: boolean) => void;
};

const MapControls = ({fnUseLocation, fnShowRegions}: Props) => {
  return (
    <form>
      <label htmlFor="locationToggle">Use Current Location&nbsp;
        <input type="checkbox" name="locationToggle" id="locationToggle" onChange={e => {
          fnUseLocation(e.currentTarget.checked);
        }}/>
      </label>
      <label>Show Regions
        <input type="checkbox" name="regionsToggle" id="regionsToggle" onChange={e => {
          fnShowRegions(e.currentTarget.checked);
        }}/>
      </label>
    </form>
  )
}

export default MapControls;