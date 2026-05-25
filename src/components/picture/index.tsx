export function Picture(props: any) {
    return (
        <div className="size-fit mx-auto">
            <img src={props.picture} alt="" className="rounded-lg shadow-lg" />
        </div>
    );
}
