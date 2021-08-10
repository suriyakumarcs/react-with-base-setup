import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={`${styles.headerParent} container-fluid`}>
      <div className={`${styles.headerRow} row align-items-center`}>
        <div
          className={`${styles.rightCol} col-8 col-sm-10 col-lg-10 col-xl-11 text-center`}
        >
          <span className={`${styles.header}`}>MyUnity Mobile Sync Tool</span>
        </div>
        <div className={`${styles.leftCol} col`}>
          <i className={`${styles.personIcon} c-pointer bi bi-person-fill`}></i>
          <i
            className={`${styles.hamburIcon} c-pointer m-l-15px bi bi-list`}
          ></i>
        </div>
      </div>
      {/* <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`${styles.link} nav-link`}>
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/history" className={`${styles.link} nav-link`}>
                TODO List
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}
