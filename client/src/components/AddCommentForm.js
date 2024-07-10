import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Esquema de validación con Yup
const CommentSchema = Yup.object().shape({
  username: Yup.string()
    .required('El nombre es requerido'),
  text: Yup.string()
    .min(10, 'El comentario es demasiado corto - debe tener al menos 10 caracteres')
    .max(500, 'El comentario es demasiado largo - no puede tener más de 500 caracteres')
    .required('El texto del comentario es requerido'),
});

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await fetch(`https://blog-cats-production.up.railway.app/api/comments/${articleName}/add-comments`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) {
        console.error(`Failed to add comment: ${result.statusText}`);
        return;
      }
      const body = await result.json();
      setArticleInfo((prevInfo) => ({ ...prevInfo, comments: body }));
      resetForm();
      setCharCount(0); // Resetear contador de caracteres después de enviar el formulario
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', text: '' }}
      validationSchema={CommentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, values }) => (
        <Form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
          <h3 className='text-xl font-bold mb-4 text-gray-900'>Agrega un comentario</h3>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Nombre:
          </label>
          <Field
            type='text'
            name='username'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <ErrorMessage name='username' component='div' className='text-red-500 text-xs italic' />

          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Comentario:
          </label>
          <Field
            as='textarea'
            name='text'
            rows='4'
            cols='50'
            onChange={(e) => {
              handleChange(e);
              setCharCount(e.target.value.length);
            }}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <div className='text-right text-gray-600 text-xs'>
            {charCount}/500 caracteres
          </div>
          <ErrorMessage name='text' component='div' className='text-red-500 text-xs italic' />

          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddCommentForm;
