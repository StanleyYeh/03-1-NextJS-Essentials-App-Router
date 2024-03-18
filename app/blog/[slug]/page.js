export default function BlogPostPage({ params }) {
    return(
        <main>
            <h1>Blog Posts</h1>
            <p>{params.slug}</p>
        </main>
    );
}