PGDMP                         w            matiz    11.5    11.5     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    18986    matiz    DATABASE     �   CREATE DATABASE matiz WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE matiz;
             postgres    false            �            1259    18987    cliente    TABLE     A  CREATE TABLE public.cliente (
    id_cliente character varying NOT NULL,
    "Nombre" character varying NOT NULL,
    "Apellidos" character varying NOT NULL,
    "Tel_fijo" character varying NOT NULL,
    "Correo" character varying,
    "Direccion" character varying NOT NULL,
    "Celular" character varying NOT NULL
);
    DROP TABLE public.cliente;
       public         postgres    false            �
          0    18987    cliente 
   TABLE DATA               r   COPY public.cliente (id_cliente, "Nombre", "Apellidos", "Tel_fijo", "Correo", "Direccion", "Celular") FROM stdin;
    public       postgres    false    196   *       }
           2606    18994    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public         postgres    false    196            �
      x������ � �     