import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const PostEdit = (props) => {
    return (
        <Edit title="Editar un post" {...props}>
            <SimpleForm>
                <TextInput disabled label='ID' source="id" />
                <TextInput label='Título' source="title" />
                <TextInput label='Texto' multiline source="body" />
                <DateInput label='Publicado en' source="publishedAt" />
            </SimpleForm>
        </Edit>
    )
}
