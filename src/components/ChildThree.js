import styles from "@/styles/item.module.css"

export default function ChildThree({ img, trailer }) {

    return (
        <div class={styles.childThree}>
            <iframe
                width="100%"
                height="100%"
                src={trailer}
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
            <img c width="100%" height="100%" src={img}></img>
        </div>
    )
}