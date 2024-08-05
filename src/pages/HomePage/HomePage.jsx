import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from "./HomePage.module.css"


export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={css.homePageTitle}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p className={css.homePageText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          eligendi necessitatibus optio ullam eos, magnam nostrum dolores nobis
          sunt voluptas voluptates, cumque nihil id. Beatae vero itaque placeat
          nihil doloribus?
        </p>
        <p className={css.homePageText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quod
          ullam perspiciatis ut soluta deserunt ducimus veniam quam, corrupti
          alias reiciendis quis, voluptate architecto recusandae eveniet dolorem
          inventore numquam laboriosam ipsum. Sit laudantium eaque at, dolore ex
          perferendis sunt asperiores quisquam placeat nostrum modi alias
          ratione commodi explicabo, eius officia adipisci repudiandae doloribus
          aut esse maxime, velit a fugit ea. Ratione, unde distinctio quibusdam
          laudantium sequi dignissimos cupiditate provident qui?
        </p>
      </div>
    </>
  );
}
