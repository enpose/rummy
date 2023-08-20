import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        Thanks for visiting rummy! Rummy is an online discussion forum site. It
        is under the umbrella of ENPOSE, Everything Non-Profit and Open-Source
        Everywhere, an organization founded to bring about a more free, just,
        and fair internet.
      </p>
      
    </>
  )
}

export default AboutPage
