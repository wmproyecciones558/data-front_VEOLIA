import { Link } from 'react-router-dom'

const Sidebar =() => {

    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="new">Agua</Link>
          </li>

          <li>
            <Link to=":corrienteId">sensores de corriente</Link>
          </li>

          <li>
            <Link to="tierraId">sensores de tierra </Link>
          </li>

          <li>
            <Link to=":aireId ">sensores de aire </Link>
          </li>
        </ul>
      </div>
    );
}
export default Sidebar