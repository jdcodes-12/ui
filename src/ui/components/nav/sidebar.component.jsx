import IconLink from '../../primitives/icon-link.primitive';

export default function Sidebar({ 
  contents
}) {
  return (
    <ul
      style={{ height: '95vh' }}
      className='
        border
        border-start-0
        border-top-0
        border-bottom-0
        col-2
        p-0
      '
    >
      {
        contents?.map((linkInfo) =>
          <IconLink link={linkInfo} key={linkInfo.label} />
        )
      }
    </ul>
  );
}
