export const filterOompas = (oompas, searchTerm) => {
  const search = searchTerm?.toLowerCase();

  return oompas.filter((oompa) => {
    const name = oompa.first_name.toLowerCase();
    const lastname = oompa.last_name.toLowerCase();
    const profession = oompa.profession.toLowerCase();

    return (
      name.includes(search) ||
      lastname.includes(search) ||
      profession.includes(search)
    );
  });
};
