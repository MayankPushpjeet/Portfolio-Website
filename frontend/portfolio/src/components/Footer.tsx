import LinkdlnLogo from '../assets/iconmonstr-linkedin-1.svg'
import GithubLogo from '../assets/Octicons-mark-github.svg'
import CodeforcesLogo from '../assets/code-forces.svg'
import LeetcodeLogo from '../assets/leetcode.svg'
import Xlogo from '../assets/x-logo-twitter-freelogovectors.net.svg'
import InstagramLogo from '../assets/Instagram-Glyph-Black-Logo.wine.svg'
import { FooterIcon } from './FooterIcon'

export function Footer(){
    const githubLink:string = "https://github.com/MayankPushpjeet";
    const codeforcesLink = "https://codeforces.com/profile/Mayank_Pushpjeet";
    const leetcodeLink = "https://leetcode.com/u/Mayank_Pushpjeet/";
    const xLink = "https://twitter.com/PushpjeetMayank";
    const instagramLink = "https://www.instagram.com/mayankpushpjeet/";
    const linkdlnLink = "https://www.linkedin.com/in/mayank-pushpjeet-828680132";
    return <div className = "flex justify-start space-x-4 lg:mt-auto md:mt-8 sm:mt-8">
        <FooterIcon src = {GithubLogo} alt = "Github" link = {githubLink}></FooterIcon>
        <FooterIcon src = {CodeforcesLogo} alt = "Github" link = {codeforcesLink}></FooterIcon>
        <FooterIcon src = {LeetcodeLogo} alt = "Github" link = {leetcodeLink}></FooterIcon>
        <FooterIcon src = {Xlogo} alt = "Github" link = {xLink}></FooterIcon>
        <FooterIcon src = {InstagramLogo} alt = "Github" link = {instagramLink}></FooterIcon>
        <FooterIcon src = {LinkdlnLogo} alt = "Github" link = {linkdlnLink}></FooterIcon>
    </div>
}