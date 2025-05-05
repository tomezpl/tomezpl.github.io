import MainLayout from '~/layouts/MainLayout';
import styles from './style.module.scss';
import {FaCode, FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillEnvelopeFill, BsMortarboardFill} from 'react-icons/bs';

import gbFlag from '~/assets/gb_flag.svg';
import {animOrder} from '~/utils/anim-order';

function AboutPage() {
    return <MainLayout>
        <div className={styles.aboutRoot}>
            <div {...animOrder()} className={[styles.container, styles.essentials].join(' ')}>
                <h1>Essential info</h1>
                <ul>
                    <li><img src={gbFlag} className={styles.flagIcon} /><span><b>UK-based</b>, fluent English speaker.</span></li>
                    <li><BsMortarboardFill size={'var(--icon-size)'} />Graduated from <b>University of Lincoln</b> with a <b>First Class Honours Bachelor's </b>degree in<b> Computer Science </b>in<b> 2020.</b></li>
                    <li><FaCode size={'var(--icon-size)'} /><span><b>5 years</b> of professional experience in <b>full-stack Web development</b>.</span></li>
                </ul>
            </div>
            <div {...animOrder(1)} className={[styles.container, styles.contact].join(' ')}>
                <h1>Contact & links</h1>
                <ul>
                    <li><BsFillEnvelopeFill size={'var(--icon-size'}/>Email: <b><a href={'mailto:tomaszzlc@gmail.com'}>tomaszzlc@gmail.com</a></b></li>
                    <li><FaGithub size={'var(--icon-size)'}/>GitHub: <b><a target={'_blank'} href={'https://github.com/tomezpl'}>https://github.com/tomezpl</a></b></li>
                    <li><FaLinkedin size={'var(--icon-size'}/><b><a target={'_blank'} href={'https://www.linkedin.com/in/tomzajac/'}>LinkedIn</a></b></li>
                </ul>
            </div>
        </div>
    </MainLayout>
}

export default AboutPage;