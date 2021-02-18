import React from 'react'

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center">Ссылок пока нет</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Вес</th>
                <th>Убрать строку</th>
            </tr>
            </thead>

            <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td><strong>{new Date(link.date).toLocaleDateString()}</strong></td>
                        <td>{link.from}</td>
                        <td className='btn'>Удалить</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}