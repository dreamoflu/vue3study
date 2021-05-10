import { Module } from "vuex";
import { GlobalDataProps } from "@/store/index";

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}
const testData: TemplateProps[] = [
  {
    id: 1,
    title: "测试",
    coverImg: "222",
    author: "liyajun",
    copiedCount: 1
  }
];
export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData
  },
  getters: {
    getTemplageById: state => (id: number) => {

      return state.data.find(t => t.id === id);
    }
  }
};

export default templates
