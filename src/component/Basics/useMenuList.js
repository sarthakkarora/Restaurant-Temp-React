// src/hooks/useMenuList.js
import { useMemo } from "react";


const useMenuList = (menu) => {
  return useMemo(() => {
    const categories = menu.map((item) => item.category);
    return ["All", ...new Set(categories)];
  }, [menu]);
};

export default useMenuList;
