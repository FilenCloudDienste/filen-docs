import clsx from "clsx"
import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import styles from "./index.module.css"

export function HomepageHeader() {
	return (
		<header className={clsx(styles.heroBanner)}>
			<div className="container">
				<Heading
					as="h1"
					className="hero__title"
				>
					Filen Docs
				</Heading>
				<p className="hero__subtitle">Build your own apps and integrations on top of Filen with our CLI, SDK and API.</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/cli"
					>
						CLI
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/sdk"
					>
						SDK
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/api"
					>
						API
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/desktop"
					>
						DESKTOP
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/web"
					>
						WEB
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/mobile"
					>
						MOBILE
					</Link>
				</div>
			</div>
		</header>
	)
}

export default function Home(): JSX.Element {
	return (
		<Layout title="Home">
			<main>
				<HomepageHeader />
			</main>
		</Layout>
	)
}
