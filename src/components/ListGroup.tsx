function ListGroup() {
    const items: string[] = [
        'Tehran',
        'Mashhad',
        'Isfahan',
        'Shiraz'
    ];

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 ? <p>no content found</p> :
                <ul className="list-group">
                    {items.map(item => <li className="list-group-item" key={item} onClick={() => console.log(item)}>{item}</li>)}
                </ul>
            }
        </>
    );
}

export default ListGroup;