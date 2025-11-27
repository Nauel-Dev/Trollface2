import React from 'react';
import { Twitter, MessageCircle, Users } from 'lucide-react';
import './Community.css';

const SOCIAL_LINKS = [
    {
        name: 'X (Twitter)',
        icon: Twitter,
        url: '#',
        color: '#00ff6a',
        description: 'Follow the chaos'
    },
    {
        name: 'Discord',
        icon: Users,
        url: '#',
        color: '#ffd400',
        description: 'Join the pack'
    },
    {
        name: 'Telegram',
        icon: MessageCircle,
        url: '#',
        color: '#b30000',
        description: 'No mercy zone'
    },
];

export const Community = () => {
    return (
        <section className="community">
            <div className="container">
                <h2 className="section-title">
                    JOIN THE <span className="text-toxic">PACK</span>
                </h2>
                <p className="community-tagline">
                    Show no mercy. Dominate together.
                </p>

                <div className="social-grid">
                    {SOCIAL_LINKS.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card glass-panel"
                                style={{ '--hover-color': social.color }}
                            >
                                <div className="social-icon">
                                    <Icon size={48} />
                                </div>
                                <h3 className="social-name">{social.name}</h3>
                                <p className="social-description">{social.description}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
