import styles from './career.module.css';

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    description: string;
    tags?: string[];
}

const ExperienceItem = ({ role, company, period, description, tags }: ExperienceProps) => {
    return (
        <div className={styles.experienceItem}>
            <div className={styles.header}>
                <div className={styles.period}>{period}</div>
                <h3 className={styles.role}>{role}</h3>
                <div className={styles.company}>{company}</div>
            </div>
            <p className={styles.description}>{description}</p>
            {tags && tags.length > 0 && (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceItem;
