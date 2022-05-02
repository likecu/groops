package work.likecu.share.mapper;

import org.apache.ibatis.annotations.Param;
import tk.mybatis.mapper.common.Mapper;
import work.likecu.share.model.UserMessage;

public interface UserMessageMapper extends Mapper<UserMessage> {

    UserMessage getUserMessage(@Param("userId") Integer userId);
    UserMessage getUserMessageByName(@Param("userNickName") String userNickName);
}