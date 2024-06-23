export type PostData = {
    id: number;
    author: string;
    body: string;
};

export type postProps = {
    id: number;
    author: string;
    body: string;
    onDeletePost: (id: number) => void;
    onEditPost: (id: number) => void;
}

export type PostListProps = {
    posts: PostData[];
    onDeletePost: (id: number) => void;
    onEditPost: (id: number) => void;
};

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
    onClick?: () => void;
}

export interface ModalProps {
    children: React.ReactNode;
    onHideModal: () => void;
}

export interface MainHeaderProps {
    onModalShow: () => void;
}

export interface NewPostProps {
    onHideModal: () => void;
    onAddPost: (post: PostData) => void;
}
