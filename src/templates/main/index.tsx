import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import { MainTemplateType } from './types';
import MainHead from './MainHead';
import { defaultHead } from './defaultHead'
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

const MainTemplate = ({ children, head }: MainTemplateType) => {
    if (!head)
        head = defaultHead

    return (
        <>
            <MainHead head={head} />
            <MainHeader />
            <main className={styles.main}>
                {
                    children
                }
            </main>

            <MainFooter />
        </>
    )
}

export default MainTemplate
